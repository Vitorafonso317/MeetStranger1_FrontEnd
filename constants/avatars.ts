export type AvatarId = '15' | '16' | '17' | '18' | '19' | '20';

type Avatar = { id: AvatarId; source: ReturnType<typeof require> };

export const AVATARS: readonly Avatar[] = [
    { id: '15', source: require('../assets/15.png') },
    { id: '16', source: require('../assets/16.png') },
    { id: '17', source: require('../assets/17.png') },
    { id: '18', source: require('../assets/18.png') },
    { id: '19', source: require('../assets/19.png') },
    { id: '20', source: require('../assets/20.png') },
];
