/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   casinogameBlackjack.js                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/31 23:36:20 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/31 23:36:34 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let count = 0;

function cc(card) {

  var hand;
  switch(card)
  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;

  }
  
    hand = "Hold";
    if(count > 0)
      hand = "Bet";
        return count + " " + hand;

  }


cc(2); cc(3); cc(7); cc('K'); cc('A');