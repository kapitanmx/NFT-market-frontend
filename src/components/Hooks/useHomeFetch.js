import {useState, useEffect} from 'react';
//API
import API from '../../API';
//Helpers
import { isPersistedState } from '../../helpers';

const initState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false); 

    const fetchAnnouncements = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const announcements = await API.fetchAnnouncement(searchTerm, page);

            setState(prev => ({
                ...announcements,
                results:
                    page > 1 ? [...prev.results, ...announcements.results] : [...announcements.results]
            }));
        } catch (err) {
            setError(true);
        }
        setLoading(false)
    };

    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState)
                return;
            }
        }
        setState(initState);
        fetchAnnouncements(1, searchTerm);
    }, [searchTerm])

    useEffect(() => {
        if (!isLoadingMore) return;

        fetchAnnouncements(state.page + 1, searchTerm);
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state)); 
    }, [searchTerm, state]);

    console.log(state);

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore }
}