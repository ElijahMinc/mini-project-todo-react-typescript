// Enum - вспомогательная сущность, которая позволяет лучше структурировать код
// если присутствуют однотипные элементы

enum Membership {
   Simple,
   Standart,
   Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)


enum SocialMedia {
   VK = 'VK',
   FACEBOOK = 'FACEBOOK',

}

const social = SocialMedia.FACEBOOK

console.log(social) // Вместо позиции будет выводиться строка Facebook