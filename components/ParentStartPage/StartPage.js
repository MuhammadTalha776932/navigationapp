import React from 'react';
import {Text,Box,Button,Pressable} from "native-base"

const StartPage = () => {
    const buttonStyle = ""
    return (
        <Box className="flex-1 items-center bg-slate-500 gap-2">
            <Box paddingY={"20"}>
                <Text alignSelf={"center"} fontSize="xl">
                    Choose your Child's device to see it on the map
                </Text>
            </Box>
            <Box className="gap-2 w-[85%] ">
                <Box>
                    <Button className="bg-white">
                        <Text className="font-serif text-xl">Click here to connect child device</Text>
                    </Button>
                </Box>
                <Box>
                    <Button>Click here to connect child device</Button>
                </Box>
                <Box>
                    <Button>Click here to connect child device</Button>
                </Box>
            </Box>
        </Box >
    )
}



export default StartPage;
