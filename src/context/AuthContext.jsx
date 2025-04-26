import React, { createContext, useState } from 'react';

const Authcontext = createContext();

const Authprovider=({children})=>{
    const [user,setuser]=useState(null);
    const login = (userdata)=>setuser(userdata);
    const logout = ()=>setuser(null);

    return (
        <Authcontext.Provider value={{user,login,logout}}>
            {children}
        </Authcontext.Provider>
    );
};

export default {Authcontext,Authprovider};