import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import useAuth from "../Hooks/useAuth";
import axios from 'axios';

const Messaging = () => {
    const id = useParams();
    const { auth, setAuth, pair, setPair } = useAuth();
    const [room, setRoom] = useState('')
    const [currentRoom, setCurrentRoom] = useState([])
    const [message, setMessage] = useState('');
    const [data, setData] = useState('');
    const [allMessages, setAllmessages] = useState([])
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const socketRef = useRef(null); // Create a reference for the socket
    console.log(pair)
  
    
    useEffect(() => {
      socketRef.current = io('http://127.0.0.1:5050/'); // Assign the socket instance to the ref
  
      socketRef.current.on('connect', () => {
        console.log('Connected to Socket.io server!');
        // Additional code to handle the connection
      });
  
      // Clean up the socket connection when the component is unmounted
      return () => {
        socketRef.current.disconnect();
      };
    }, []);

    useEffect(() => {
        const fetchProfileAndMessages = async () => {
          try {
            const profileResponse = await axios.get(`http://127.0.0.1:5050/view_profile?id=${id.id}`);
            const profileResults = profileResponse.data;
            console.log(profileResults);
            setData(profileResults);
      
            const messagesResponse = await axios.get(`http://127.0.0.1:5050/messages?name=${auth?.user?.name}`);
            const messagesResults = messagesResponse.data;
            console.log('all messages ', messagesResults);
            setAllmessages(messagesResults);
            
            setRoom(allMessages[0].room)


      
            setLoading(false);
          } catch (error) {
            console.error('Error retrieving data:', error);
          }
        };
      
        fetchProfileAndMessages();
      }, [id]);
  
      useEffect(() => {
        setCurrentRoom(allMessages.filter(obj => obj.room === room))
      }, [room])
  
    const sendMessage = () => {
      const info = {
        sender: auth?.user?.name,
        receiver: data?.user?.name,
        room: auth?.user?.name + '-' + data?.user?.name,
        message: message,
      };
  
      socketRef.current.emit('send_message', info); // Access the socket from the ref
      console.log('sent');
  
      setMessage('');
    };
  
    const handleInputChange = (event) => {
      setMessage(event.target.value);
    };
    

    return (
        <div>
            {loading ?  (<p>Loading...</p>) : (
            <main className="tyn-body" >
        <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <div className="tyn-aside tyn-aside-base">
                <div className="tyn-aside-head">
                    <div className="tyn-aside-head-text">
                        <h3 className="tyn-aside-title">Chats</h3>
                    </div>
                </div>
                <div className="tyn-aside-body" data-simplebar>
                    <div className="tab-content">
                        <div className="tab-pane show active" id="all-chats" tabIndex="0" role="tabpanel">
                            <ul className="tyn-aside-list">
                                {allMessages.map(element => (
                                <li className="tyn-aside-item js-toggle-main active">
                                    <div className="tyn-media-group">
                                        <div className="tyn-media tyn-size-lg">
                                            <img src="/m_assets/images/avatar/1.jpg" alt=""/>
                                        </div>
                                        <div className="tyn-media-col">
                                            <div className="tyn-media-row">
                                                {element.sent_by == auth?.user?.name ? 
                                                <h6 className="name">{element.sent_to}</h6> : <h6 className="name">{element.sent_by}</h6> }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tyn-main tyn-chat-content" id="tynMain">
                <div className="tyn-chat-head">
                    <ul className="tyn-list-inline d-md-none ms-n1">
                        <li><button className="btn btn-icon btn-md btn-pill btn-transparent js-toggle-main">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                            </button></li>
                    </ul>
                    <div className="tyn-media-group">
                        <div className="tyn-media tyn-size-lg d-none d-sm-inline-flex">
                            <img src="/m_assets/images/avatar/1.jpg" alt=""/>
                        </div>
                        <div className="tyn-media tyn-size-rg d-sm-none">
                            <img src="/m_assets/images/avatar/1.jpg" alt=""/>
                        </div>
                        <div className="tyn-media-col">
                            <div className="tyn-media-row">
                                <h6 className="name">Jasmine <span className="d-none d-sm-inline-block">Thompson</span></h6>
                            </div>
                            <div className="tyn-media-row has-dot-sap">
                                <span className="meta">Active</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="tyn-chat-body js-scroll-to-end" id="tynChatBody">
                    <div className="tyn-reply" id="tynReply">
                        <div className="tyn-reply-separator">May 10, 2022, 11:14 AM</div>
                        {currentRoom.map(element => (
                           element.sent_by == auth?.user?.name ? 
                           <div className="tyn-reply-item outgoing">
                            <div className="tyn-reply-group">
                                <div className="tyn-reply-bubble">
                                    <div className="tyn-reply-text"> I need help. </div>
                                </div>
                            </div>
                        </div> : <div className="tyn-reply-item incoming">
                            <div className="tyn-reply-group">
                                <div className="tyn-reply-bubble">
                                    <div className="tyn-reply-text"> I hope these article helps. </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                        
                    </div>
                </div>
                <div className="tyn-chat-form" style={{ position: 'fixed', bottom: 0, width: '75%' }}>
                    <div className="tyn-chat-form-enter">
                        <div className="tyn-chat-form-input" id="tynChatInput">
                        <input type="text" value={message} onChange={handleInputChange} />
                        </div>
                        <ul className="tyn-list-inline me-n2 my-1">
                            <li><button 
                            onClick={sendMessage}
                            className="btn btn-icon btn-white btn-md btn-pill">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    </svg>
                                </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </main>
            )}
    </div>

    )
}

export default Messaging