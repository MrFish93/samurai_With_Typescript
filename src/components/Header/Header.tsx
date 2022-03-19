import c from './Header.module.css'

export function Header() {
    return (
        <header className={c.header}>
            <img
                src={'https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png'}/>
        </header>
    )
}