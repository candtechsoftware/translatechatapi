package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1034,
}

type connection struct {
	ws   *websocket.Conn
	send chan []byte
}

func serveWs(w http.ResponseWriter, r *http.Request, roomId string) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Prinlnt(err.Error())
	}
	c := &connection{send: make(chan []byte, 256), ws: ws}
	s := subscription{c, roomId}

	h.register <- s
	go s.writePump()
	go s.readPump()
}

func main() {
	go h.run()

	router := gin.New()
	router.LoadHTMLFiles("index.html")

	router.GET("/room/:roomId", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})
	router.GET("/ws/:roodId", func(c *gin.Context) {
		roomId := c.Param("roomId")
		serveWs(c.Writer, c.Request, roomId)
	})

	router.Run("0.0.0.0:8080")
}
