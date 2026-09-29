import { configurarFormulario } from "./formulario.js";

export const paginas = {
  inicio: `
     <h2>Quem somos?</h2>
      <section id="inicio">
        <img
          id="inicio-img"
          src="../img/images.jpg"
          alt="Cachorro caramelo resgatado"
        />
        <p>
          Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado
          e proteção de animais em situação de abandono. Nosso trabalho é
          realizado por voluntários que acreditam que todo animal merece um lar
          seguro, alimentação adequada e muito carinho. Além do resgate,
          promovemos campanhas de conscientização sobre adoção responsável e
          bem-estar animal.
        </p>
      </section>
      <h2>Iniciativas</h2>
      <section id="iniciativas">
        <p>
          Desenvolvemos ações que promovem o bem-estar animal e incentivam a
          participação da comunidade na causa.
        </p>
        <ul>
          <li>
            <strong>Resgate Animal:</strong> acolhimento de animais abandonados
            ou vítimas de maus-tratos.
          </li>
          <li>
            <strong>Campanhas de Alimentação:</strong> arrecadação e
            distribuição de ração para animais resgatados e famílias que cuidam
            de animais em situação de risco.
          </li>
          <li>
            <strong>Castração Solidária:</strong> campanhas para reduzir o
            abandono e promover a saúde dos animais.
          </li>
        </ul>
        <p id="adote"><strong>Adote!</strong></p>
      </section>

      <section>
        <h2>Como posso ajudar?</h2>
        <ul id="ajuda">
          <li>
            <img src="../img/icones/doeemj.png" alt="Ícone de doação" />
            <span
              >Faça doações de ração, medicamentos ou materiais de
              higiene.</span
            >
            <img src="../img/icones/doeemj.png" alt="Ícone de doação" />
          </li>
          <li>
            <img
              src="../img/icones/voluntarioemj.png"
              alt="Ícone de voluntario"
            />
            <span>Seja um voluntário e participe das ações da ONG.</span>
            <img
              src="../img/icones/voluntarioemj.png"
              alt="Ícone de voluntario"
            />
          </li>
          <li>
            <img src="../img/icones/adocaoemj.png" alt="Ícone de adoção" />
            <span>Adote um animal e ofereça um novo lar.</span>
            <img src="../img/icones/adocaoemj.png" alt="Ícone de adoção" />
          </li>
          <li>
            <img
              src="../img/icones/compartilhaemj.png"
              alt="Ícone de compartilhamento"
            />
            <span
              >Compartilhe nossas campanhas e ajude a divulgar a causa.</span
            >
            <img
              src="../img/icones/compartilhaemj.png"
              alt="Ícone de compartilhamento"
            />
          </li>
        </ul>
      </section>
      `,

  projetos: `
     <div class="badges">
          <span class="badge projeto">Projeto</span>
          <span class="badge em_andamento">Em andamento</span>
        </div>
        <div id="introducao">
          <span
            >Conheça as principais iniciativas da ONG Solidária e descubra como
            nossas ações ajudam animais em situação de vulnerabilidade. Cada
            projeto é desenvolvido com o apoio de voluntários, parceiros e
            pessoas que acreditam na importância da proteção e do bem-estar
            animal.</span
          >
          <img
            id="imagem-intro"
            src="../img/icones/cachorrinho.png"
            alt="desenho fofo de um cachorro"
          />
        </div>
        <section>
          <h2>Resgate Animal</h2>
          <p>
            O Projeto <i>Resgate Animal</i> é responsável por acolher cães e
            gatos abandonados, feridos ou vítimas de maus-tratos. Após o
            resgate, os animais recebem atendimento veterinário, alimentação,
            cuidados diários e um ambiente seguro para se recuperarem até
            encontrarem um novo lar.
          </p>
          <img
            src="../img/resgate.jpg"
            alt="Mulher segurando cachorro em meio a uma enchente"
          />
        </section>
        <section>
          <h2>Campanhas de Alimentação</h2>
          <p>
            As <i>campanhas de alimentação</i> arrecadam ração, medicamentos e
            materiais de higiene para animais resgatados e famílias que cuidam
            de animais em situação de risco. Essas ações garantem que muitos
            animais recebam os cuidados básicos necessários.
          </p>
          <img
            src="../img/ração.jpg"
            alt="Voluntário levando sacos de ração para dentro de uma sala"
          />
        </section>
        <section>
          <h2>Castração Solidária</h2>
          <p>
            A <i>Castração Solidária</i> promove campanhas para incentivar a
            castração de cães e gatos de forma acessível. O projeto busca
            reduzir o abandono, prevenir doenças e contribuir para o controle
            responsável da população de animais.
          </p>
          <img
            src="../img/castração.jpg"
            alt="Cachorro com manchinhas sendo cuidado por enfermeira"
          />
        </section>
        <section>
          <h2>Feira de Adoção</h2>
          <p>
            As <i>feiras de adoção</i> aproximam animais resgatados de famílias
            que desejam adotar com responsabilidade. Antes da adoção, todos os
            animais passam por avaliação veterinária e recebem os cuidados
            necessários para iniciar uma nova vida.
          </p>
          <img
            src="../img/adoção.jpg"
            alt="Filhotes observando através de uma grade"
          />
        </section>
  `,

  cadastro: `
        <section>
          <h2>Preencha seus dados</h2>

          <form>
            <fieldset>
              <legend>Dados pessoais</legend>
              <label for="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome completo"
                required
              />
              <label for="nascimento">Data de nascimento</label>
              <input type="date" id="nascimento" name="nascimento" required />
              <label for="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                maxlength="14"
                pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                title="Formato: 000.000.000-00"
                required
              />
            </fieldset>
            <fieldset>
              <legend>Contato</legend>
              <label for="email">Email para contato</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@exemplo.com"
                required
              />
              <label for="telefone">Telefone para contato</label>
              <input
  type="tel"
  id="telefone"
  name="telefone"
  placeholder="(00)00000-0000"
  pattern="\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}"
  title="Formato: (00)00000-0000"
  maxlength="14"
  required
/>
            </fieldset>
            <fieldset>
              <legend>Endereço</legend>
              <label for="estado">Escolha seu estado</label>
              <select id="estado" name="estado" required>
                <option value="">Selecione um estado</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
                <option value="MG">Minas Gerais</option>
                <option value="ES">Espírito Santo</option>
              </select>
              <label for="cidade">Insira sua cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Nome de sua cidade"
                required
              />
              <label for="bairro">Insira seu bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Insira o nome do bairro"
                required
              />
              <label for="cep">Insira seu CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                pattern="[0-9]{5}-[0-9]{3}"
                placeholder="00000-000"
                title="Formato: 00000-000"
                maxlength="9"
                required
              />
            </fieldset>
            <fieldset>
              <legend>Ajuda</legend>
              <label for="ajuda">Como quer ajudar?</label>
              <select id="ajuda" name="ajuda" required>
                <option value="">
                  Escolha uma forma de ajudar nosso projeto
                </option>
                <option value="RJ">Quero ser voluntário</option>
                <option value="SP">Doação</option>
                <option value="MG">Lar temporário</option>
                <option value="ES">Sugestão</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Mensagem</legend>
              <label for="mensagem">Insira sua observação</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="8"
                placeholder="Escreva aqui sua observação ou mensagem para nossos voluntários."
              >
              </textarea>
              <div id="mensagem-formulario"></div>

              <button type="submit">Enviar cadastro</button>
            </fieldset>
          </form>
          <div class="alerta-sucesso">Obrigada por ajudar nossa ONG!</div>
          <div class="toast-demo">Cadastro realizado com sucesso!</div>
        </section>
        <p id="obrigado">Obrigada! Aguarde nosso contato.</p>
        <img
          src="../img/golden.gif"
          alt="Golden retriever abanando o rabo"
          class="gif"
        />
  `,
};
const conteudo = document.getElementById("conteudo");

function carregarPagina() {
  const rota = window.location.hash.replace("#", "") || "inicio";

  conteudo.innerHTML = paginas[rota] || paginas.inicio;

  if (rota === "cadastro") {
    configurarFormulario();
  }
}

carregarPagina();
window.addEventListener("hashchange", carregarPagina);
