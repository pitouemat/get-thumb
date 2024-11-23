document.addEventListener('DOMContentLoaded', function() {
    const getVideo = document.querySelector('#video');
    const uploadThumb = document.querySelector('#btn');
    const thumbnailImage = document.querySelector('#thumbnail');
  
    // Adicionando evento ao botão
    uploadThumb.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o envio do formulário (recarregamento da página)
        
        // Pegando o valor do campo de URL
        const videoUrl = getVideo.value;
        if (videoUrl) {
            getThumbnailUrl(videoUrl);
        } else {
            alert('Por favor, insira uma URL de vídeo válida.');
        }
    });
  
    // Função para gerar a URL da thumbnail
    function getThumbnailUrl(videoUrl) {
        // Extrair o ID do vídeo a partir da URL
        const videoId = videoUrl.split('v=')[1]?.split('&')[0]; // Adiciona uma checagem para garantir que existe o parâmetro 'v'
        
        if (videoId) {
            // Construir a URL da thumbnail
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            // Atualizar a imagem da thumbnail
            thumbnailImage.src = thumbnailUrl;
            thumbnailImage.alt = "Thumbnail do vídeo"; // Definir texto alternativo
        } else {
            alert('URL inválida. Por favor, insira uma URL válida do YouTube.');
        }
    }
});