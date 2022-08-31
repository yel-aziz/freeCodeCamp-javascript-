/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   defaultStatment.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/31 21:05:41 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/31 21:05:47 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function switchOfStuff(val) {
    let answer = "";
     switch(val)
      {
        case 'a':
        answer = "apple";
        break;
        case 'b':
        answer = "bird";
        break;
        case 'c':
        answer = "cat";
        break;
        default:
        answer = "stuff";
        break;
      }
      return answer;
  }
  
  switchOfStuff("b");