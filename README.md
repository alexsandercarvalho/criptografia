Criptografia, segundo a Avast, é "o método para proteger dados ao embaralhá-los de forma que não sejam legíveis".

Você foi contratado pelas Forças Armadas do Brasil, constituídas pela Marinha, pelo Exército e pela Aeronáutica, para trabalhar no departamento de Guerra Cibernética. Uma das área deste departamento, que será onde você vai trabalhar, consiste em quebrar a criptografia inimiga.

Durante um conflito, os matemáticos do departamento conseguiram identificar a chave que gera a criptografia dos dados do inimigo e chegaram à conclusão de que é necessário saber quantas consoantes existem na senha criptografada interceptada. Essa chave é obtida pela multiplicação da quantidade de consoantes pela quantidade de letras que existem na senha:

chave = (quantidade de consoantes)*(quantidade de letras)
Você ficou responsável por desenvolver um programa que, ao receber a senha criptografada interceptada, retorne qual a chave.

Entrada
Sua entrada será composta por uma string, chamada senhaCriptografada, que guarda a senha criptografada interceptada do inimigo.

Saída
Você deve imprimir na tela a chave que gerou aquela senha.

Exemplos
Entrada
senhaCriptografada = cronoinonioreniw

Saída
128

Explicação
A senha criptografada possui 16 letras e 8 consoantes. Portanto, a chave é dada por 16 x 8 = 128.


