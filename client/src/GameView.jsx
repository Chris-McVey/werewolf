import React, { useState } from 'react';

const GameView = () => {

  const [message, setMessage] = useState('');
  // timer will start/end voting???
  const [voting, setVoting] = useState(false);
  const [votes, setVote] = useState(0);
  // # of werewolves dependant on # players???
  const [wolves, setWolves] = useState(2);
  // Just for testings sake
  const [day, setDay] = useState(true);


  const Voting = () => {
    if (!voting) {
      return null;
    } else {
      return (
        <div>

          <span>Player <a>Votes {votes}</a></span>
          <button
          type='submit'
          value='Submit'
          onClick={() => setVote(votes + 1) + setVoting(false)}
          >Vote</button>
        </div>
      )
    }
  };

  return (
    <>
      <div style={{backgroundColor: day ? 'yellow' : 'grey'}}>
      <button
      type='submit'
      value='Submit'
      onClick={() => setDay(day ? false : true)}
      >Change Phase</button>
      <div style={{height: '250px', width: '50%', border: '3px solid black'}}>
        <p>Username</p>
        <p>Role</p>
        <p>Current turn</p>
        <span>Discussion Timer</span>
      </div>
      <div style={{height: '100px', width: '50%', border: '3px solid black'}}>
        <span>Icon, Username, Alive/Dead</span>
        <span>Icon, Username, Alive/Dead</span>
        <span>Icon, Username, Alive/Dead</span>
      </div>
      <span>Remaining Werewolves {wolves}</span>
      <div style={{height: '250px', width: '50%', border: '3px solid black'}}>
        <span>Username, icon, message</span>
        <span>Username, icon, message</span>
        <br/>
        <textarea
        name='gameChat'
        value={message}
        onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button type='submit' value='Submit'>Post</button>
      </div>
      {voting ? <Voting/> :
        <div>
  s        <select>
            <option value='Lynch'>Lynch</option>
            <option value='Save'>Save</option>
            <option value='See'>See</option>
          </select>
          <button type='submit' value='Submit'>Submit</button>
       </div>}
      <button
      type='submit'
      value='Submit'
      onClick={() => setVoting(true)}
      >Pretend Timer</button>
      </div>
    </>
  )
}
export default GameView;