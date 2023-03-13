import React, { useState } from 'react'
import './Skill.css'
import js from '../Assets/JS.png'
import html from '../Assets/HTML.png'
import css from '../Assets/CSS.png'
import express from '../Assets/Express.png'
import node from '../Assets/NodeJS.png'
import redux from '../Assets/Redux.png'
import react from '../Assets/React.png'
import slq from '../Assets/SQL.png'
import postegrs from '../Assets/Postgres.png'
import antd from '../Assets/ant-d.png'
import bootstrap from '../Assets/bootstrap.png'
import auth from '../Assets/Auth0.png'
import sequelize from '../Assets/sequelize.png'
import git from '../Assets/Git.png'
import cloudinary from '../Assets/Cloudinary.png'

export default function Skill() {
  return (
    <div className='skillContainer'>
      <div className='skillDiv'>
        <div className='divCard'>
          <img src={js} alt="js" width='80px' height='80px' />
          <h3>JavaScript</h3>
        </div>

        <div className='divCard'>
          <img src={html} alt="html" width='72px' height='83px' />
          <h3>HTML5</h3>
        </div>

        <div className='divCard'>
          <img src={css} alt="css" width='70px' height='80px' />
          <h3>CSS3</h3>
        </div>

        <div className='divCard'>
          <img src={react} alt="react" width='80px' height='80px' />
          <h3>React JS</h3>
        </div>

        <div className='divCard'>
          <img src={redux} alt="redux" width='80px' height='80px' />
          <h3>Redux</h3>
        </div>

        <div className='divCard'>
          <img src={bootstrap} alt="bootystrap" width='80px' height='80px' />
          <h3>Bootstrap</h3>
        </div>

        <div className='divCard'>
          <img src={antd} alt="antd" width='80px' height='80px' />
          <h3>Ant Design</h3>
        </div>

        <div className='divCard'>
          <img src={node} alt="node" width='160px' height='80px' />
          <h3>Node JS</h3>
        </div>

        <div className='divCard'>
          <img src={express} alt="express" width='160px' height='80px' />
          <h3>Expres JS</h3>
        </div>

        <div className='divCard'>
          <img src={sequelize} alt="sequelize" width='80px' height='80px' />
          <h3>Sequelize</h3>

        </div>
        <div className='divCard'>
          <img src={postegrs} alt="postgre" width='120px' height='80px' />
          <h3>PostgreSQL</h3>
        </div>

        <div className='divCard'>
          <img src={slq} alt="sql" width='80px' height='80px' />
          <h3>SQL</h3>
        </div>

        <div className='divCard'>
          <img src={git} alt="git" width='80px' height='80px' />
          <h3>GitHub</h3>
        </div>

        <div className='divCard'>
          <img src={auth} alt="auth" width='70px' height='70px' />
          <h3>Auth0</h3>
        </div>

        <div className='divCard'>
          <img src={cloudinary} alt="clou" width='80px' height='80px' />
          <h3>Cloudinary</h3>
        </div>
      </div>
    </div>
  )
}
