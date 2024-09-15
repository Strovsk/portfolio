import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import Link from "next/link";

export default function WellcomeMessage() {
  return (
    <>
      <Grid container margin={10} direction={'column'}>
        <Grid>
          <Typography variant="h2" color="secondary">Aloha</Typography>
        </Grid>
        <Grid>
          <Typography variant="h1" color="primary">Sou o Thiago</Typography>
        </Grid>
        <Grid container alignItems={'center'} columnGap={8}>
          <Typography variant="h5" color="primary">dev - fullstack</Typography>
          <Grid container columnGap={5}>
            <Link href={'https://www.github.com/strovsk'} target="_blank">
              <Image src={'/github.svg'} alt="Github logo" width={50} height={50} />
            </Link>
            <Link href={'https://www.linkedin.com/in/thiago-santa-clara/'} target="_blank">
              <Image src={'/linkedin.svg'} alt="Linkedin logo" width={50} height={50} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}