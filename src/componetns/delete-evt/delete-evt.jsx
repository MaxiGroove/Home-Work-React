import React from 'react'
import { events } from '../../store'

import './delete-evt.css'

const DeleteEvt = () => {
    
    const handleDeleteArchive = () => {
        events.archiveData.map(item => events.deleteArchiveEvents(item._id));
        events.fetch();
    }
    
    return <button className="delete-evt" onClick={handleDeleteArchive}>Удалить все события</button>
}

export default DeleteEvt;