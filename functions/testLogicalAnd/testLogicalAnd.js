/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   testLogicalAnd.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:41:14 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:41:24 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
    
    return "No";
  }
  
  testLogicalAnd(10);