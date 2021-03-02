import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();

        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(e) {
        console.log(e);
    }
}

export const createArticles = (post) => async (dispatch) => {
    try {
        const { data } = await api.PostArticle(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateArticle = (slug, article) => async (dispatch) => {
    try {
        const {data} = await api.updateArticle(slug, article)
         
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteArticle = (slug) => async (dispatch) => {
    try {
        await api.deleteArticle(slug)
        
        dispatch({ type: 'DELETE', payload: slug })
    } catch (error) {
        console.log(error);
    }
}