import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUsername = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard formatUsername={formatUsername} initialIsFollowing userName='midudev' name='Miguelito Perez'/>
            <TwitterFollowCard formatUsername={formatUsername} initialIsFollowing={false} userName='deargia' name='Giana Perez'/>
        </section>
    )
}

export default App