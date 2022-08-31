/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   switchWithMultipsInputs.js                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/31 21:10:52 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/31 21:10:54 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function sequentialSizes(val) {
    let answer = "";
    switch(val)
    {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High"
        break;
    }
    return answer;
  }
  
  sequentialSizes(1);