/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   comparingWithoutChanginTypes.js                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 22:20:53 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 22:20:55 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function compareEquality(a, b) {
 
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");