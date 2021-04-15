import axios from 'axios';
import jwt_decode from 'jwt-decode';

export function isUser(){
  const token = sessionStorage.getItem('lyricsToken');
  if (token == null)
    return false;
  else{
    const decoded = jwt_decode(token);    
    return !decoded.admin;    
  }
}

export function isAdmin(){
  const token = sessionStorage.getItem('lyricsToken');
  if (token == null)
    return false;
  else{
    const decoded = jwt_decode(token);    
    return decoded.admin;
  }
}

export async function getSearchLyrics(song){
  let searchString = '';
  if (song.artist !== '') searchString += `&artist=${song.artist}`;
  if (song.title !== '') searchString += `&title=${song.title}`;
  if (song.album !== '') searchString += `&album=${song.album}`;
  if (song.lyrics !== '') searchString += `&text=${song.lyrics}`;
  searchString = searchString.substr(1);
    
  try {
    const response = await axios.get(`/api/lyrics/search?${searchString}`);    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function getLyricsById(id){
  try {
    const response = await axios.get(`/api/lyrics/download/${id}`);    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function getLatestLyrics(){
  try {
    const response = await axios.get('/api/lyrics/latest');
    return response;
  }
  catch(ex){    
    return ex;
  }
}

export async function getPopularLyrics(){
  try {
    const response = await axios.get('/api/lyrics/popular');    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function postRegisterUser(userData){     
  try {
    const response = await axios.post('/api/users', userData);
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function postRegisterAdmin(userData, token){
  try {    
    const response = await axios.post('/api/users', userData,
                    { headers: {'x-auth-token': `${token}` }});
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function postLoginUser(userData){
  try {    
    const response = await axios.post('/api/auth', userData);                          
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function postLyrics(songData, token){
  try {    
    const response = await axios.post('/api/lyrics', songData,
                          { headers: {'x-auth-token': `${token}` }});
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function getLyricsToInspect(token){
  try {
    const response = await axios.get('/api/lyrics/inspect',
                  { headers: {'x-auth-token': `${token}` }});    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function putLyricsApprove(id, token){
  try {
    const response = await axios.put(`/api/lyrics/approve/${id}`, id,
                  { headers: {'x-auth-token': `${token}` }});    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function putLyricsRefuse(id, remark, token){
  try {
    const response = await axios.put(`/api/lyrics/refuse/${id}`, {'remark': remark},
                  { headers: {'x-auth-token': `${token}` }});    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function getLyricsToRevise(token){
  try {
    const response = await axios.get('/api/lyrics/revise',
                  { headers: {'x-auth-token': `${token}` }});    
    return response;
  }
  catch(ex){
    return ex;
  }
}

export async function putLyricsRevision(id, song, token){
  try {
    const response = await axios.put(`/api/lyrics/revise/${id}`, song,
                  { headers: {'x-auth-token': `${token}` }});    
    return response;
  }
  catch(ex){
    return ex;
  }

}