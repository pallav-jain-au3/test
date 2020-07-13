import {API_URL, request} from '../helper';

export function getAllShipments() {
    let url = `${API_URL}/shipments`;
    return request({
        url: url,
        method: 'get',
    }
    );
}

export function getShipment(id) {
    let url = `${API_URL}/shipments/${id}`;
    return request({
        url: url,
        method: 'get',
    }
    );
}