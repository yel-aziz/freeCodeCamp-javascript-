/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   testLogicalOr.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 23:44:40 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 23:44:51 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testLogicalOr(val) {
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    return "Inside";
  }
  
  testLogicalOr(15);