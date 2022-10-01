A browser is a software application whose task is to locate a server and retrieve the files which include html files, css files, etc. When we enters a URL in the browser for example https://pestotech.teachable.com just after few seconds we see the contents of this domain rendered in to the browser. All this happens in few seconds depending on the internet connectivity but under the hood lot of things happened during this process. Lets discus what happens under the hood when we enter a URL
1.	We know that every computer has an IP address and server is also a computer with some special powers so it will also have an IP address. Now the browser is responsible to make connection with the server and maintain it so the only way to contact a server is if we know its IP address which looks like (104.19.239.117). When we enters a URL in human readable form (https://pestotech.teachable.com) and not in numbers. Now DNS is responsible to convert our domain to its IP address. It first search in the browser cache and if not found then it search in the OS cache that  is in Host file. If both seach fails then it raises a DNS query and search in the ISP cache, most of the time ip will be found  here and if not then it continues its search in the root domain and the root domain does not actually returns the ip but it actually tells where to look for the ip. It then looks into TLD (Top Level Domain) such as .com,.gov.org,etc and then further it looks into second level domain such as teachable in our example and then further it looks into the third level domain that is pestotech in our case and it returns an IP back to the ISP and form ISP it gets to the client.
2.	The second thing that the browser does is it tries to make a connection with the server using TCP/IP protocol. This connection happens in three-ways handshake process
<ul>
  <li>First the browser sends a SYNC  packet to the server and checks whether the server is accepting new connections.</li>
  <li>If the server accepts the new connection then in response it send the SYNC/ACK packets acknowledgment packet to the client and opens a port for communication.</li>
  <li>When this response is received by the Client then then client sends  ACK packets to the server, which means that the client has received the packet and send the acknowledgment to the server. Now the TCP connection is stablished and the browser and server are ready for data transmission.</li>
  </ul>
3.	Once the TCP connection is successful the browser will send a request asking to https://pestotech.teachable.com asking for its web page. On the server’s side apache or any other webserver analyses the request and sends the response (JSON,HTML,etc) back to the client.
High Level Components of the browser
The browser’s high level components are : 
<ul>
  <li>User Interface</li>
  <li>Browser Engine</li>
  <li>Rendering Engine</li>
  <li>Networking</li>
  <li>Javascript Interpreter</li>
  <li>UI Backend</li>
  <li>Data Storage</li>
  </ul>
<strong>User Interface :</strong> In the browser  the area where a user can interact except the display area comes under user interface like the address bar, back button,reload button,etc.<br/>
<strong>Browser Engine :</strong> Browser  Engine act as a bridge between user interface and rendering  engine. If the user interact in the browser such as changing the url or pressing back button,etc then the browser engine tell the rendering engine to modify the UI according to the request.<br/>
<strong>Rendering Engine :</strong> Whatever we see on the display area of the browser, the rendering engine is responsible for it. It parses our XML ,HTML page and displays it to the browser<br/>
<strong>Networking :</strong> It handles all the network related communications and make a cache to reduce the load.<br/>
<strong>Javascript Interpreter :</strong> This component parses the javascript code and asks the rendering engine to change the UI if needed.<br/>
<strong>UI Backend :</strong> This component is used to draw basic widgets that are platform independent like windows,combo boxes,etc.<br/>
<strong>Data Storage :</strong> This is a small strorage system for the browser where localstorage,cookies,bookmarks,etc are kept so that it can be used in whenever the data is needed.<br/>

Now when we received the files the browser starts parsing those files into DOM (Document Object Modal) and CSSOM. The first thing that the browser does is build a DOM tree and then it is converted into tokens

