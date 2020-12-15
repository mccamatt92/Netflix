import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  const [profile,setProfile] = useState({});
  const[loading,setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[profile.displayName]);

return profile.displayName ?(
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="">
      </Header>
    </>
):
(
 <SelectProfileContainer user={user} setProfile={setProfile}/>
);
}