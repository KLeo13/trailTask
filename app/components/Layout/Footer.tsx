import { Box, Divider, Image, Text } from "@mantine/core"
import { Link, NavLink } from "react-router"
import { iconMap, navigationItems, socialLinks } from "~/utils/constant"

const Footer: React.FC<{}> = () => {
  return (
    <>
      <Box maw="1440px" mx="auto" px={{lg:40}} c="white" display={"flex"} className="flex-col gap-10">
        <Box display={"flex"} className="flex-col lg:flex-row items-center lg:items-start justify-between gap-y-10 gap-x-30">
          <Box display={"flex"} flex={1} className="flex-col gap-5 items-center lg:items-start">
            <Image
              src={'/images/logo-light.png'} 
              alt="Footer-Logo" 
              w={200} />
            <Text fz={"sm"} ta={{sm: 'start', base: 'center'}}>
              {'20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise. '}
            </Text>
          </Box>
          <Box display={'flex'} flex={1} className="justify-around gap-5">
            {navigationItems.map((item, index) => {
              return (
                <NavLink to={item.to}
                  key={index}
                  className={"text-white text-sm"}>
                    {item.label}
                </NavLink>
              )
            })}
          </Box>
          <Box display={'flex'} flex={1} className="justify-end gap-5">
            {socialLinks.map((link, index) => {
              return (
                <Link to={link.to} key={index}>
                  {iconMap[link.icon]}
                </Link>
              )
            })}
          </Box>
        </Box>
        <Divider className="" color="white"/>
        <Text fz={"xs"} ta={"center"}>{'© 2026 Jake Sta Teresa. All rights reserved.'}</Text>
        
      </Box>
    </>
  )
}

export default Footer