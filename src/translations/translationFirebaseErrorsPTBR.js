export function translationFirebaseErrorsPTBR(error) {
  switch (error) {
    case "auth/app-not-authorized":
      return "Este aplicativo, identificado pelo domínio onde está hospedado, não está autorizado a usar Firebase Authentication com a chave API fornecida.";

    //1

    case "auth/app-not-installed":
      return "A aplicação móvel solicitada correspondente ao identificador (nome do pacote Android ou ID do pacote iOS) fornecido não está instalada neste dispositivo.";

    //2

    case "auth/cordova-not-ready":
      return "O framework Cordova não está pronto.";

    //3

    case "auth/cors-unsupported":
      return "Este navegador não é suportado.";

    //4

    case "auth/credential-already-in-use":
      return "Esta credencial já está associada a uma conta de usuário diferente.";

    //5

    case "auth/custom-token-mismatch":
      return "O token personalizado corresponde a um público diferente.";

    //6

    case "auth/requires-recent-login":
      return "Esta operação é sensível e requer autenticação recente. Faça o login novamente antes de tentar novamente esta solicitação.";

    //7

    case "auth/dynamic-link-not-activated":
      return "Ative os links dinâmicos no Firebase Console e concorde com os termos e condições.";

    //8

    case "auth/email-already-in-use":
      return "O endereço de e-mail já está em uso por outra conta.";

    //9

    case "auth/expired-action-code":
      return "O código de ação expirou.";

    //10

    case "auth/cancelled-popup-request":
      return "Esta operação foi cancelada devido a outro popup conflitante sendo aberto.";

    //11

    case "auth/internal-error":
      return "Ocorreu um erro interno.";

    //12

    case "auth/invalid-app-id":
      return "O identificador do aplicativo móvel não está registrado para o projeto atual.";

    //13

    case "auth/invalid-user-token":
      return "A credencial do usuário não é mais válida. O usuário deve entrar novamente.";

    //14

    case "auth/invalid-auth-event":
      return "Ocorreu um erro interno.";

    //15

    case "auth/invalid-verification-code":
      return "O código SMS de verificação usado para criar a credencial de autorização é invalido. Por favor reenvie o código e tenha certeza de usar o código providenciado pelo usuário.";

    //16

    case "auth/invalid-cordova-configuration":
      return "Os seguintes plugins Cordova devem ser instalados para habilitar o OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappflugin-inapbrowser e cordova-plugin-customurlscheme.";

    //17

    case "auth/invalid-custom-token":
      return "O formato de token personalizado está incorreto. Por favor, verifique a documentação.";

    //18

    case "auth/invalid-email":
      return "O endereço de e-mail está mal formatado.";

    //19

    case "auth/invalid-api-key":
      return "Sua chave API é inválida, por favor, verifique se você a copiou corretamente.";

    //20

    case "auth/invalid-credential":
      return "A credencial automática fornecida está mal formatada ou expirou.";

    //21

    case "auth/invalid-message-payload":
      return "O modelo de e-mail correspondente a esta ação contém caracteres inválidos em sua mensagem. Por favor, corrija indo para a seção Auth email templates no Firebase Console.";

    //22

    case "auth/invalid-oauth-provider":
      return "EmailAuthProvider não é suportado para esta operação. Esta operação suporta apenas provedores OAuth.";

    //23

    case "auth/unauthorized-domain":
      return "Este domínio não é autorizado para operações OAuth para o seu projeto Firebase. Edite a lista de domínios autorizados do console do Firebase.";

    //24

    case "auth/invalid-action-code":
      return "O código de ação é inválido. Isto pode acontecer se o código estiver mal formado, expirar ou já tiver sido usado.";

    //25

    case "auth/wrong-password":
      return "A senha é inválida ou o usuário não tem uma senha.";

    //26

    case "auth/invalid-recipient-email":
      return "O e-mail correspondente a esta ação não enviou como o endereço de e-mail do destinatário fornecido é inválido.";

    //27

    case "auth/invalid-sender":
      return "O modelo de e-mail correspondente a esta ação contém um e-mail ou nome do remetente inválido. Por favor, corrija indo para a seção Auth email templates no Firebase Console.";

    //28

    case "auth/invalid-verification-id":
      return "O ID verificador usado para criar a credencial de autorização é inválido.";

    //29

    case "auth/missing-iframe-start":
      return "Ocorreu um erro interno.";

    //30

    case "auth/auth-domain-config-required":
      return "Certifique-se de incluir authDomain ao chamar o Firebase. initializeApp(), seguindo as instruções no console do Firebase.";

    //31

    case "auth/missing-app-credential":
      return "A solicitação de verificação do telefone está sem uma declaração de verificador de aplicativo. Um token de resposta reCAPTCHA precisa ser fornecido.";

    //32

    case "auth/missing-verification-code":
      return "A credencial de autenticação do telefone foi criada com um código de verificação SMS vazio.";

    //33

    case "auth/missing-verification-id":
      return "A credencial de autenticação do telefone foi criada com um ID de verificação vazio.";

    //34

    case "auth/app-deleted":
      return "Esta instância do FirebaseApp foi excluída.";

    //35

    case "auth/account-exists-with-different-credential":
      return "Já existe uma conta com o mesmo endereço de e-mail, mas com credenciais de login diferentes.";

    //36

    case "auth/network-request-failed":
      return "Ocorreu um erro na rede (como timeout, conexão interrompida ou host inalcançável).";

    //37

    case "auth/no-auth-event":
      return "Ocorreu um erro interno.";

    //38

    case "auth/no-such-provider":
      return "O usuário não foi vinculado a uma conta com o provedor fornecido.";

    //39

    case "auth/operation-not-allowed":
      return "O provedor fornecido está desabilitado para este projeto Firebase. Habilite-o no console do Firebase, na aba método de login da seção Auth.";

    //40

    case "auth/operation-not-supported-in-this-environment":
      return 'Esta operação não é suportada no ambiente em que esta aplicação está rodando. \\O "location.protocol" deve ser http, https ou chrome-extension e o armazenamento web deve estar habilitado.';

    //41

    case "auth/popup-blocked":
      return "Incapaz de estabelecer uma conexão com o popup. Pode ter sido bloqueada pelo navegador.";

    //42

    case "auth/popup-closed-by-user":
      return "O popup foi fechado pelo usuário antes de finalizar a operação.";

    //43

    case "auth/provider-already-linked":
      return "O usuário só pode ser vinculado a uma identidade para o provedor dado.";

    //44

    case 'auth/quota-exceeded": ':
      return "A cota do projeto para esta operação foi excedida.";

    //45

    case "auth/redirect-cancelled-by-user":
      return "A operação de redirecionamento foi cancelada pelo usuário antes de finalizar.";

    //46

    case "auth/redirect-operation-pending":
      return "Uma operação de redirecionamento de login já está pendente.";

    //47

    case "auth/timeout":
      return "A operação foi expirada";

    //48

    case "auth/user-token-expired":
      return "A credencial do usuário não é mais válida. O usuário deve fazer o login novamente.";

    //49

    case "auth/too-many-requests":
      return "Bloqueamos todas as solicitações deste dispositivo devido a atividade incomum. Tente novamente mais tarde.";

    //50

    case "auth/user-cancelled":
      return "O usuário não concedeu a sua solicitação as permissões que solicitou.";

    //51

    case "auth/user-not-found":
      return "Não há nenhum registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.";

    //52

    case "auth/user-disabled":
      return "A conta do usuário foi desabilitada por um administrador.";

    //53

    case "auth/user-mismatch":
      return "As credenciais fornecidas não correspondem ao usuário previamente cadastrado.";

    //54

    case "auth/user-signed-out":
      return "Usuário deslogado.";

    //55

    case "auth/weak-password":
      return "A senha deve ter 6 caracteres ou mais.";
    //56

    case "auth/web-storage-unsupported":
      return "Este navegador não é suportado ou cookies e dados de terceiros podem ser desabilitados.";

    //57

    case "auth/captcha-check-failed":
      return "O token de resposta do reCAPTCHA é inválido, expirou, já está sendo usado ou o domínio associado a ele não corresponde a lista de domínios autorizados.";

    //58

    case "auth/code-expired":
      return "O código SMS expirou. Por favor reenvie o código de verificação para tentar novamente.";

    //59

    case "auth/invalid-app-credential":
      return "A requisição de verificação do telefone contém uma aplicação de verificação inválido. O token de resposta reCAPTCHA é inválido ou expirou.";

    //60

    default:
      return "Ocorreu um erro.";

    //61
  }
}
