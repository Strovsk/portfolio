import React from "react";
import { Button, Container } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from "next/link";


export default function Menu() {
  return (
    <Container fixed sx={{ position: 'fixed', bottom: '4%' }}>
      <Link href="#">
        <Button sx={{ textTransform: 'none' }} color="primary" variant="contained" endIcon={<KeyboardArrowUpIcon />}>Veja meu resumo</Button>
      </Link>
      <Link href="#thech-skills">
        <Button sx={{ textTransform: 'none' }} color="primary" variant="text">tecnologias</Button>
      </Link>
      <Link href="#projects">
        <Button sx={{ textTransform: 'none' }} color="primary" variant="text">projetos</Button>
      </Link>
    </Container>
  )
}
