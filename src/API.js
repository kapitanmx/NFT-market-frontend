import {
    BASE_URL,
    ANNOUNCEMENTS,
    USERS,
    REQ_TOKEN,
} from './config'

const LOGIN_URL = `${BASE_URL}${USERS}`;

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
};

const getOption = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    }
}

const modifyOption = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    }
}

const deleteOption = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}

const api = {
    //Announcements
    fetchAnnouncements: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${BASE_URL}${ANNOUNCEMENTS}${searchTerm}&page=${page}`
            : `${BASE_URL}${ANNOUNCEMENTS}`;
        return await (await fetch(endpoint)).json();
    },
    fetchAnnouncement: async announcementId => {
        const endpoint = `${BASE_URL}${ANNOUNCEMENTS}${announcementId}`
        return await (await fetch(endpoint)).json();
    },
    createAnnouncement: async (
        title, 
        description,
        imgs,
        price,
        advName,
        advId,
        category,
        tags, 
        initDate, 
        expDate ) => {
        const endpoint = `${BASE_URL}${ANNOUNCEMENTS}`;
        const bodyData = {
            title,
            description,
            imgs,
            price,
            advName,
            advId,
            category,
            tags, 
            initDate,
            expDate
        };
        const data = await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json()
        return data;
    },
    ModifyAnnouncement: async (
        announcementId,
        title, 
        description,
        imgs,
        price,
        advName,
        advId,
        category,
        tags, 
        initDate, 
        expDate 
        ) => {
        const endpoint = `${BASE_URL}${ANNOUNCEMENTS}${announcementId}`;
        const bodyData = {
            title, 
            description,
            imgs,
            price,
            advName,
            advId,
            category,
            tags, 
            initDate, 
            expDate 
        }
        const data = await (
            await fetch(endpoint, {
                ...modifyOption,
                body: JSON.stringify(bodyData)
            })
        )
        return data;
    },
    DeleteAnnouncement: async announcementId => {
        const endpoint = `${BASE_URL}${ANNOUNCEMENTS}${announcementId}`;
        return await (
            await fetch(endpoint, {
                ...deleteOption,
                body: JSON.stringify({announcementId})
            })
        )
    },
    //Transactions
    fetchTransactions: async (searchTerm, page, userId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/transactions/${searchTerm}&page=${page}`
        return await (await fetch(endpoint)).json();
    },
    fetchTransaction: async (transactionId, userId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/transactions/${transactionId}`
        return await (await fetch(endpoint)).json();
    },
    createNewTransaction: async (
        date,
        type,
        payer,
        payerId,
        receiver,
        receiverId
    ) => {
        const endpoint = `${BASE_URL}${USERS}${payerId}/transactions/`;
        const bodyData = {
            date,
            type,
            payer,
            payerId,
            receiver,
            receiverId,
        };
        const data = await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        );
        return data;
    },
    modifyTransaction: async (
        transactionId,
        date,
        type,
        payer,
        payerId,
        receiver,
        receiverId
        ) => {
        const endpoint = `${BASE_URL}${USERS}${payerId}/transactions/${transactionId}`;
        const bodyData = {
            date,
            type,
            payer,
            payerId,
            receiver,
            receiverId
        };
        const data = await (
            await fetch(endpoint, {
                ...modifyOption,
                body: JSON.stringify(bodyData)
            })
        );
        return data;
    },
    deleteTransaction: async (userId, transactionId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/transactions/${transactionId}`;
        return await (
            await fetch(endpoint, {
                ...deleteOption,
                body: JSON.stringify({transactionId})
            })
        );
    },
    //User Wallet
    fetchUserWallet: async (userId, walletId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/wallet/${walletId}`;
        return await (await fetch(endpoint)).json();
    },
    //User Cart
    fetchUserCart: async (userId, cartId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/cart/${cartId}`;
        return await (await fetch(endpoint)).json();
    },
    modifyUserCart: async (userId, cartId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/cart/${cartId}`;
        return await(
            await fetch(endpoint, {
                ...modifyOption,
                body: JSON.stringify({cartId})
            })
        )
    },
    deleteUserCart: async (userId, cartId) => {
        const endpoint = `${BASE_URL}${USERS}${userId}/cart/${cartId}`;
        return await ( 
            await fetch(endpoint, {
                ...deleteOption,
                body: JSON.stringify({cartId})
            })
        )
    },
    //Registration
    signUp: async (
        name,
        lastName,
        avatar,
        email,
        password,
        country,
        street,
        houseNumber,
        postalCode,
        city,
        sex
    ) => {
        const endpoint = `${BASE_URL}${USERS}`;
        const bodyData = {
            name,
            lastName,
            avatar,
            email,
            password,
            country,
            street,
            houseNumber,
            postalCode,
            city,
            sex,
        }
        return await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        );
    },
    
    //Authentication stuff
    getRequestToken: async () => {
        const reqToken = await (await fetch(REQ_TOKEN)).json();
        return reqToken.request_token;
    },
    authenticate: async (requestToken, email, password) => {
        const bodyData = {
            email,
            password,
            request_token: requestToken
        };
        const data = await (
            await fetch(LOGIN_URL, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();
        return data;
    }
}

export default api;