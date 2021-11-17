import style from './PrincipalComponent.module.css'

function PrincipalComponent () {
  
  const monster = 'https://io2.convertiez.com.br/m/lojasmel/shop/products/images/2028189/medium/energeticomonsterultralata473mlmonsterenergy_195631.jpg'
  return (
    <>
      <h1>Estamos Aprendendo CSS com o Melhor Professor de Todos</h1>
        <div className= {style.principalComponent}>
          <img src={monster} alt="Monster"/>
          <img src={monster} alt="Monster" />
          <img src={monster} alt="Monster" />
        </div> 

        <div className={style.textoPrincipal}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magnam aliquid. Voluptatum quos natus perferendis enim obcaecati eligendi aliquid placeat aliquam minus quia! Mollitia impedit ipsa nisi porro a minima. Id quae amet voluptas, explicabo fugit quod illo adipisci unde, illum minus fugiat! Voluptatum, debitis assumenda. Voluptates quaerat repudiandae ullam perferendis laborum blanditiis, laudantium doloribus et cumque saepe reiciendis vero. Dolorum quis facilis rerum dolores veritatis, inventore cum hic. Iure cumque facilis corrupti porro dolore aspernatur beatae mollitia voluptatem expedita. <br/>Eos eius repudiandae et, non aut ad nostrum debitis optio molestiae dicta tenetur facilis officia velit, nemo saepe expedita quae porro repellat magnam. Laboriosam, beatae a. Est temporibus ea mollitia tempora dolor optio eligendi amet quis quo perspiciatis nulla libero laboriosam quos aspernatur consequuntur recusandae, provident dolore iure id officiis exercitationem. Minima, molestias impedit sequi repellat nostrum aperiam obcaecati consectetur illo neque, iure cupiditate atque necessitatibus corporis perspiciatis ratione quasi.</p>
        </div>     
    </>
  );
}

export default PrincipalComponent;