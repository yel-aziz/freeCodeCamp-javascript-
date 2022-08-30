/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   equalityOperator.js                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 22:08:05 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 22:09:08 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
 console.log(testEqual(10));
 console.log(testEqual(21));
 console.log(testEqual(12));


