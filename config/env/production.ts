import { Department } from "../../@types/department";
import { ChannelReactionRole, GuildConfig, MessageReactionRole } from "../../@types/guildConfig";
import { ServerRoles } from "../../@types/serverRole";

const departments: Department[] = [
  {
    slug: "AJ",
    name: "システムデザイン工学部 情報システム工学科",
    departmentRoleId: "796549994785275905",
    facultyRoleId: "827102602306519060",
    emojiId: "796584431078342697",
    channelId: "796375425521156168",
  },
  {
    slug: "AD",
    name: "システムデザイン工学部 デザイン工学科",
    departmentRoleId: "796550069066661958",
    facultyRoleId: "827102602306519060",
    emojiId: "796584431229468772",
    channelId: "796379596664602634",
  },
  {
    slug: "FA",
    name: "未来科学部 建築学科",
    departmentRoleId: "796550096405266443",
    facultyRoleId: "827103151781183488",
    emojiId: "796584431312699413",
    channelId: "796379500849397830",
  },
  {
    slug: "FI",
    name: "未来科学部 情報メディア学科",
    departmentRoleId: "796550147437625364",
    facultyRoleId: "827103151781183488",
    emojiId: "796584431409168404",
    channelId: "796379526224805908",
  },
  {
    slug: "FR",
    name: "未来科学部 ロボット・メカトロニクス学科",
    departmentRoleId: "796550189950959616",
    facultyRoleId: "827103151781183488",
    emojiId: "796584431360016424",
    channelId: "796379547368816640",
  },
  {
    slug: "EJ",
    name: "工学部 電気電子工学科",
    departmentRoleId: "796550215125041152",
    facultyRoleId: "827103710802214942",
    emojiId: "796584431250046976",
    channelId: "796379349522841600",
  },
  {
    slug: "EH",
    name: "工学部 電子システム工学科",
    departmentRoleId: "796550261635678228",
    facultyRoleId: "827103710802214942",
    emojiId: "796584430902312971",
    channelId: "796379383333912597",
  },
  {
    slug: "ES",
    name: "工学部 応用化学科",
    departmentRoleId: "796550287510863902",
    facultyRoleId: "827103710802214942",
    emojiId: "796584431472607232",
    channelId: "796379408897802303",
  },
  {
    slug: "EK",
    name: "工学部 機械工学科",
    departmentRoleId: "796550320657662010",
    facultyRoleId: "827103710802214942",
    emojiId: "796584431149383741",
    channelId: "796379436957827152",
  },
  {
    slug: "EF",
    name: "工学部 先端機械工学科",
    departmentRoleId: "796550324578943017",
    facultyRoleId: "827103710802214942",
    emojiId: "796584431342321674",
    channelId: "796379457966833715",
  },
  {
    slug: "EC",
    name: "工学部 情報通信工学科",
    departmentRoleId: "796550368061423667",
    facultyRoleId: "827103710802214942",
    emojiId: "796584431154364446",
    channelId: "796375457607319562",
  },
  {
    slug: "NE",
    name: "工学部第二部 電気電子工学科",
    departmentRoleId: "796550391500243024",
    facultyRoleId: "827103753806413896",
    emojiId: "796584431422406676",
    channelId: "796379694193836102",
  },
  {
    slug: "NM",
    name: "工学部第二部 機械工学科",
    departmentRoleId: "796550497078738987",
    facultyRoleId: "827103753806413896",
    emojiId: "796584431536046080",
    channelId: "796379723633917952",
  },
  {
    slug: "NC",
    name: "工学部第二部 情報通信工学科",
    departmentRoleId: "796550517714976768",
    facultyRoleId: "827103753806413896",
    emojiId: "796584431594111017",
    channelId: "796379744102907984",
  },
  {
    slug: "RU",
    name: "理工学部 理学系",
    departmentRoleId: "796550936590942209",
    facultyRoleId: "827102786051244032",
    emojiId: "796584433783537736",
    channelId: "796379911589462087",
  },
  {
    slug: "RB",
    name: "理工学部 生命科学系",
    departmentRoleId: "796550971165507595",
    facultyRoleId: "827102786051244032",
    emojiId: "796584431599091743",
    channelId: "796379957646458940",
  },
  {
    slug: "RD",
    name: "理工学部 情報システムデザイン学系",
    departmentRoleId: "796550977561559071",
    facultyRoleId: "827102786051244032",
    emojiId: "796584431661482004",
    channelId: "796379981550059560",
  },
  {
    slug: "RM",
    name: "理工学部 機械工学系",
    departmentRoleId: "796550980157571075",
    facultyRoleId: "827102786051244032",
    emojiId: "796584432575709205",
    channelId: "796380005835604009",
  },
  {
    slug: "RE",
    name: "理工学部 電子工学系",
    departmentRoleId: "796550983060684880",
    facultyRoleId: "827102786051244032",
    emojiId: "796584431803957268",
    channelId: "796380028006301727",
  },
  {
    slug: "RG",
    name: "理工学部 建築・都市環境学系",
    departmentRoleId: "796550985761685534",
    facultyRoleId: "827102786051244032",
    emojiId: "796584431842099250",
    channelId: "796380059581415426",
  },
];

const roles: ServerRoles = {
  member: {
    name: "メンバー",
    roleId: "797458909300129792",
  },
  evenNumber: {
    name: "偶数",
    roleId: "825015663213936651",
  },
  oddNumber: {
    name: "奇数",
    roleId: "825015452723052587",
  },
  modelator: {
    name: "モデレーター",
    roleId: "796375044334419969",
  }
}

const messageReactionRoles: MessageReactionRole[] = [
]

const channelReactionRoles: ChannelReactionRole[] = [
  {
    roleId: "797639166808293447",
    roleName: "趣味: 音楽",
    emojiId: "1F3B5",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797639466864476192",
    roleName: "趣味: プログラミング",
    emojiId: "2328 FE0F",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797639470983151646",
    roleName: "趣味: イラスト",
    emojiId: "1F58C FE0F",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797639473344282634",
    roleName: "趣味: VR",
    emojiId: "1F97D",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797639474980192257",
    roleName: "趣味: パソコン",
    emojiId: "1F5A5 FE0F",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797639477287714866",
    roleName: "趣味: サイクリング",
    emojiId: "1F6B2",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "797645140151894086",
    roleName: "趣味: アウトドア",
    emojiId: "1F5FB",
    channelId: "797476460709412895",
    channelName: "3号館エントランス"
  },
  {
    roleId: "798162057589555230",
    roleName: "裏CP: えっっ",
    emojiId: "",
    channelId: "797476492485459989",
    channelName: "9号館エントランス"
  },
  {
    roleId: "798161861199265842",
    roleName: "798161861199265842",
    emojiId: "裏CP: JK科",
    channelId: "797476492485459989",
    channelName: "9号館エントランス"
  }
]

const guildConfig: GuildConfig = {
  guildId: "796374774158065674",
  roles: roles,
  departments: departments,
  messageReactionRoles: messageReactionRoles,
  channelReactionRoles: channelReactionRoles
}

export default guildConfig