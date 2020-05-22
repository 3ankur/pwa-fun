// add the events

self.addEventListener("install",(evt)=>{
    console.log("Service worked has been installed ");
})

//activate 
self.addEventListener("activate",(evt)=>{
    console.log("Service worker has been activated");
})