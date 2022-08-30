/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   testGreaterOrEqual.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:37:46 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:37:52 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testGreaterOrEqual(val) {
    if (val >= 20) {  
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);