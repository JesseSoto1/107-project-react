import { IconMoodPuzzled } from '@tabler/icons-react';

function NotFound(){
    return(
        <div>
            <IconMoodPuzzled size={400} color='red' stroke={1}/>
            <h3>404 page not found</h3>
            <p>Ooops! The page you are looking for doesn't exist.</p>
        </div>
    )
}

export default NotFound;