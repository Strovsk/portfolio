'use client';

import React from "react";
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material";
import theme from "@/providers/theme";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from "next/link";

export default function Menu() {
  return (
    <Grid container spacing={5} margin={5} sx={{
      position: 'fixed',
      bottom: 10,
      [theme.breakpoints.down('sm')]: { margin: 0, width: '100%', top: 10 }
    }}>
      <Grid sx={{
        [theme.breakpoints.down('sm')]: { order: 3 }
      }}>
        <Link href="#">
          <Button
            sx={{
              textTransform: 'none',
              [theme.breakpoints.down('sm')]: {
                position: 'fixed',
                bottom: 0,
                width: '100%',
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }
            }}
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowUpIcon />}
          >Veja meu resumo</Button>
        </Link>
      </Grid>

      <Grid container justifyContent={'space-around'} sx={{
        [theme.breakpoints.down('sm')]: { width: '100%' }
      }}>

        <Grid>
          <Link href="#thech-skills">
            <Button sx={{ textTransform: 'none' }} color="primary" variant="text">tecnologias</Button>
          </Link>
        </Grid>

        <Grid>
          <Link href="#projects">
            <Button sx={{ textTransform: 'none' }} color="primary" variant="text">projetos</Button>
          </Link>
        </Grid>

      </Grid>
    </Grid>
  )
}
