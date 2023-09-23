"use client"
import { Box, Container, Link, TextField, Typography } from '@mui/material'
import { urlShortener } from './redux/features/urlShortenerSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';
import { PrimaryButton } from './components/Buttons';
import { useState } from 'react';


export default function Home() {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch<AppDispatch>();
  const { shortenedUrl, loading, error } = useSelector((state: any) => state.urlShortenerReducer)
  
  const handleShortenUrl = () => {
    if (url) {
      dispatch(urlShortener(url));
    }
  };

  console.log(shortenedUrl)

  return (
    <main>
      <Container>
        <Box
          sx={{
            mt: '50px',
          }}
        >

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: '16px'
            }}
          >
            <TextField
              id="outlined-basic"
              label="Input The URL"
              variant="outlined"
              value={url}
              onChange={({target}) => setUrl(target.value)}
              sx={{
                marginRight: '30px'
              }}
            />
            <PrimaryButton
              onClick={handleShortenUrl}
              disabled={loading}
            >
              Shorten
            </PrimaryButton>
          </Box>
          <Box
            sx={{
              ml: { xs: '5%', md: '35%' },
              mt: '20px'
            }}
          >
            {loading && <Box>Loading...</Box>}
            {error && <Box>Error: {error}</Box>}
            {shortenedUrl && (
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'start',
                  }}
                >
                  <Typography mr={2} variant='h5'>Short url: </Typography>
                  <Link variant='h5' rel="preload" href={shortenedUrl?.full_short_link} underline="none">
                    {shortenedUrl?.short_link}
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'start',
                  }}
                >
                  <Typography mr={2} variant='h5'>Short url 2: </Typography>
                  <Link variant='h5' rel="preload" href={shortenedUrl?.full_short_link2} underline="none">
                    {shortenedUrl?.short_link2}
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        </Container>
    </main>
  )
}
