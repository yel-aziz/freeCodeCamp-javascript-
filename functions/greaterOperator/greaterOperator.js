/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   greaterOperator.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:33:19 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:33:26 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);