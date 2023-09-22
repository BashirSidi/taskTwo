"use client"
import { Box, Container, Link, Typography } from '@mui/material'
import { getUrls } from './redux/features/urlShortenerSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';


export default function Home() {
  const dispatch = useDispatch<AppDispatch>;
  const urls = useSelector((state: any) => state.urlShortenerReducer.urls)
  return (
    <main>
      <Container>
        <Box>
          <Typography
            sx={{
              mt: { xs: '10px', md: '60px' },
              textAlign: 'center',
              color: '#000',
              fontSize:{ xs: '30px', md: '56px' },
              fontWeight: { xs: 500, md: 700 },
              lineHeight: '140%',
            }}
          >
            URL Shortener
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: '#000',
              mt: { xs: '16px', md: '20px' },
              mb: { xs: '16px', md: '20px' },
              fontSize: { xs: '14px', md: '18px' },
              fontWeight: 400,
              lineHeight: '160%',
              mx: { xs: 'auto', md: 'auto' },
              width: { xs: '90%', md: '518px' },
            }}
          >
            URL shortener tool using 
            <Link href="https://shrtco.de/docs" underline="none">
              {' https://shrtco.de/docs'}
            </Link>
          </Typography>

          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            urls{JSON.stringify(urls)}
          </Box>
        </Box>
        </Container>
    </main>
  )
}
