
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <h1 style={{ textAlign: "center", fontSize: "110px", marginBottom: "50px" }}>404 Not Found</h1>
                <p style={{ textAlign: "center", marginBottom: "50px" }}>Your visited page not found. You may go home page.</p>
                <Link to={"/"} style={{
                    display: "flex", justifyContent: "center", alignItems: "center", width: '254px', height: "50px" , background: "#DB4444", color: "#fff", margin: "auto"}}>Back to home page</Link>           
        </Container>
        </div>
    )
}

export default NotFoundPage