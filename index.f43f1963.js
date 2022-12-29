function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){_defineProperty(e,t,n[t])}))}return e}var firebaseApp=firebase.initializeApp({}),db=firebaseApp.firestore(),auth=firebaseApp.auth(),register=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;auth.createUserWithEmailAndPassword(e,t).then((function(e){console.log(e.user)})).catch((function(e){alert(e.message),console.log(e.code),console.log(e.message)}))},login=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;auth.signInWithEmailAndPassword(e,t).then((function(e){console.log(e.user)})).catch((function(e){alert(e.message),console.log(e.code),console.log(e.message)}))},saveData=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;db.collection("users").add({email:e,password:t}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))},readData=function(){db.collection("users").get().then((function(e){console.log(e.docs.map((function(e){return _objectSpread({},e.data(),{id:e.id})})))}))},updateData=function(){db.collection("users").doc("6caYOiNxwviOJFIQ4Uag").update({email:"ashishisagoodboy1234@gmail.com",password:"123456"}).then((function(){alert("Data Updated")}))},deleteData=function(){db.collection("users").doc("6caYOiNxwviOJFIQ4Uag").delete().then((function(){alert("Data Deleted")})).catch((function(e){console.log(e)}))};
//# sourceMappingURL=index.f43f1963.js.map
