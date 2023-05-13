import torage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';

const feedListReducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case 'add_feed':
            // adicionando feed 
            // Gerando o id apartir da quantidade de noticias 

            let id = state.length+1;

            // criando o state
            newState = [
                ...state,
                {
                    titulo: action.payload.titulo,
                    urlFeed: action.payload.urlFeed,
                    id: id,
                }
            ]
            alert('item adicionado!')
            return newState;

        case 'delete_feed':
            // remover feed
            newState = [
                ...state.filter((feed) => feed.titulo !== action.payload.titulo)
            ]
            alert('Item removido!')
            return newState;

        case 'restore_state':
            return state;
            
        case 'delete_all':
            // limpando todos os itens 
            //e retornando um array vazio
            // Tentei implementar com asyncStorage, mas não tive sucesso
            alert('Feeds removidos!')
            return [];
        default:
            return state;
    }
};

const addFeed = dispatch => {
    return (titulo, urlFeed, callback) => {
       dispatch({ type: 'add_feed', payload: { titulo, urlFeed } });

       if(callback){
           callback();
       }

    };
};

const deleteFeed = dispatch => {
    return (titulo) => {
        dispatch({ type: 'delete_feed', payload: { titulo } });
    };
};
// chamando o reducer restore_state
const restoreState = dispatch => async () => {
    return () => {
        dispatch({type: 'restore_state'})
    }
}
// chamando reducer delete_all
const deleteAll = dispatch => {
    return () => {
        dispatch({type:'delete_all'})
    }
}

const rssFeeds = [
    {
        titulo: 'G1 - Todas as notícias',
        urlFeed: 'https://g1.globo.com/rss/g1/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'G1 - Brasil',
        urlFeed: 'https://g1.globo.com/rss/g1/brasil/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'G1 - Tecnologia e Games',
        urlFeed: 'https://g1.globo.com/rss/g1/tecnologia/',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    },
    {
        titulo: 'Jovem Nerd',
        urlFeed: 'http://jovemnerd.com.br/rss',
        descricao: '',
        urlSite: '',
        urlImagem: ''
    }
    
];

export const { Context, Provider } = createDataContext(
    feedListReducer,
    { addFeed, deleteFeed, restoreState, deleteAll },
    rssFeeds
);
