'use client';

import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";

export type MenuOption = {
  label: string;
  path: string;
  disabled?: boolean;
};

interface SideBarMenuProps {
  options: MenuOption[];
}

const SideBarMenu = (props: SideBarMenuProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuClick = (path: string, isCurrent: boolean) => {
    if (!isCurrent) {
      router.push(path);
    }
  };

  return (
    <Box
      data-name="sidebar-menu"
      sx={{
        boxShadow: '1px 4px 20px rgb(27, 27, 27, .28)',
        height: '100%',
        width: 380,
        paddingInline: '10px',
        paddingBlock: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'flex-start',
      }}
    >
      <Box>
        <Typography variant='h5' fontWeight={300} color="#000">Config</Typography>
      </Box>
      <Box>
        {props.options.map((option) => (
            <MenuItem
              key={option.path}
              sx={{
                marginTop: '10px',
                padding: '20px',
                borderRadius: '10px',
                fontSize: '16px',
                transition: 'background 0.3s',
                background: pathname === option.path ? 'linear-gradient(90deg, #054987 0%, #091724 100%)' : 'transparent',
                color: pathname === option.path ? '#fff' : undefined,
                height: '50px',
                '&:hover': {
                  background: 'linear-gradient(90deg, #054987 0%, #091724 100%)',
                  color: '#fff',
                  opacity: 0.7,
                },
              }}
              disabled={option.disabled}
              onClick={() => handleMenuClick(option.path, pathname === option.path)}
            >
              {option.label}
            </MenuItem>
          ))}
      </Box>
      <Box sx={{ 
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }}>
        <IconButton onClick={async () => {
          signOut({ callbackUrl: '/login' });
        }}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SideBarMenu;