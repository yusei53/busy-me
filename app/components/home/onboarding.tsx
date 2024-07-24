import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Onboarding = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      mt={7}
    >
      <Image src="/busy-me.png" alt="busy me" width={100} height={100} />
      <Typography component="h1" fontSize={25} letterSpacing={0.5}>
        busy me
      </Typography>

      <Stack spacing={4} my={5}>
        <Typography letterSpacing={2} lineHeight={2}>
          日々のタスクに追われて、まるで猪突猛進のように突き進む毎日を送っていませんか？
        </Typography>
        <Typography letterSpacing={2}>
          思いつくままにタスクをこなすのも一つの手ですが、一旦こころを落ち着かせて、今自分がやるべきことを可視化し優先度を整理してみるのはどうでしょうか。
        </Typography>
        <Typography letterSpacing={2} lineHeight={2}>
          ここはタスクを管理する場所ではありません。あくまで自分が今持っているタスクを吐き出し、可視化するための場所です。やることを多く感じて途方に暮れた時には、一度ここに書き出してみてください。
        </Typography>
      </Stack>
    </Box>
  );
};

export default Onboarding;
