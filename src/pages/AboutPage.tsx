import React from 'react';
import { useHistory } from 'react-router';


export const AboutPage: React.FC = () => {
   const history = useHistory()
   return (
      <>
         <h1>Страница информации</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas distinctio molestiae nobis obcaecati dicta eius provident laboriosam iusto minima ea!</p>
         <button className="btn" onClick={() => history.goBack()}>Обратно к списку дел</button>
      </>
   )
}