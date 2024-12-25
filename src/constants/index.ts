const channels = [
  {
    name: "VTV1",
    id: "vtv-1",
    icon: "https://images.fptplay53.net/media/channels/icon_channel_vtv1-hd_165657381026.png?w=300&c=0&fmt=webp",
    src: "https://vips-livecdn.fptplay.net/MTA4NDUxNDB8dnR2MWhkX2Fici5zbWlsfGZwdHwxNzM1MDkwNTM4fDIxLjI0MC4yMTcuNzR8NDViNzA0MjNjZjY1YTNjNDlmMzk0MGQ2OTcxODM0N2E/fnxch2/vtv1hd_abr.smil/playlist.m3u8",
  },
  {
    name: "VTV3",
    id: "vtv-3",
    icon: "https://images.fptplay53.net/media/channels/icon_channel_vtv3-hd_165657381668.png?w=300&c=0&fmt=webp",
    src: "https://vips-livecdn.fptplay.net/MTA4NDUxNDB8dnR2M2hkX2Fici5zbWlsfGZwdHwxNzM1MDkwNjE3fDIxLjI0MC4yMTcuNzR8MDU0N2I3M2UyZTE0MmY5MmI1N2Q2MTM5YjAzM2FkNWM/fnxch2/vtv3hd_abr.smil/playlist.m3u8",
  },
];

const vods = [
  {
    name: "HLS",
    id: "tan-than-bang",
    icon: "https://images.fptplay53.net/media/OTT/VOD/2024/09/30/tan-than-bang-duong-tien-fpt-play-1727664267819_Landscape.jpg?w=300&c=0&fmt=webp",
    src: "https://vod05-cdn.fptplay.net/POVOD/encoded/2024/10/01/tanthanbangduongtien-newgodsyangjian-2022-sv-pre-2024-10-01/H264/master.m3u8",
  },
  {
    name: "DASH",
    id: "the-tu",
    icon: "https://images.fptplay53.net/media/OTT/VOD/2024/04/22/the-tu-bien-mat-roi-fpt-play-1713755896813_Landscape.jpg?w=300&c=0&fmt=webp",
    src: "https://vod04-cdn.fptplay.net/POVOD/encoded/2024/06/06/multias-missingcrownprince-2024-kr-016-1717652118/H264/stream.mpd",
  },
];

const drmVods = [
  {
    name: "Lối Sống Kỳ Lạ - DASH",
    id: "1",
    icon: "https://images.fptplay53.net/media/OTT/VOD/2024/02/15/loi-song-ky-la-fpt-play-1707981169950_Landscape.jpg?w=300&c=0&fmt=webp",
    src: "https://vod01-cdn.fptplay.net/POVOD/encoded/2024/05/12/strangewayoflife-2023-es-1715530274/H264/dash_drm/stream.mpd",
  },
];

export { channels, vods, drmVods };
