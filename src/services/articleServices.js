import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const articleService = () => {
    return axiosWithAuth().get('http://localhost:5000/api/articles')
    .then((result) => {
        console.log(result.data)
        return result.data;
    }).catch((err) => {
        return [];
    });
    
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.