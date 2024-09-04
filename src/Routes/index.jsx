import { Home } from '@/Pages/Home'
import { PagePattern } from '@/Pages/PagePattern'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagePattern />}>
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}