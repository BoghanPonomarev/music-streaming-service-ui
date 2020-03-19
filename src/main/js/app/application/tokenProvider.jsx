import React from 'react';

var token = '';
export function setToken(newToken){
    token = newToken;
}

export function getToken(){
    return token;
}