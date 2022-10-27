import {useState, useEffect} from 'react';
//API
import API from '../../API';

export const useAnnounceFetch = announcementId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                setLoading(true);
                setError(false);

                const announcement = await API.fetchAnnouncement(announcementId);

                setState({
                    ...announcement,
                });

                setLoading(false);
            } catch (err) {
                setError(true);
            }
        };
    })
}