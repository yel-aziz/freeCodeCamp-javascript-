/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   switchStatment.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/31 21:02:01 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/31 21:02:24 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function caseInSwitch(val) {
    let answer = "";
    switch(val)
    {
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
    }
    return answer;
  
  }
  
  caseInSwitch(1);
  console.log(caseInSwitch(3));